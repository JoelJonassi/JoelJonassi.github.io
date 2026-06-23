---
layout: blog-post
title: "Building RAG Pipelines: What I've Learned So Far"
date: 2026-06-15
description: "Honest reflections on building Retrieval-Augmented Generation systems — the pitfalls, the surprises, and what actually matters in production."
tags: AI, RAG, LLM, Python
category: findings
---

I've spent the past few weeks building RAG pipelines for internal tooling at work. Here's what I wish someone had told me before I started.

## The Naive Approach Works (For Demos)

My first attempt was the obvious thing: chunk documents, embed them, store in a vector DB, retrieve top-k, stuff into the prompt.

It worked great for demos. My colleagues were impressed.

Then we tried it with real data. And it fell apart.

**The main issues:**

Chunking strategy matters more than the embedding model. Splitting by fixed token count destroys context. Semantic chunking or sliding windows with overlap gave much better results — not marginally better, *dramatically* better.

Vector similarity alone isn't enough. Hybrid search — combining BM25 keyword matching with dense vector retrieval — outperformed pure vector search on every metric that mattered to us.

Reranking is cheap insurance. A cross-encoder reranker after initial retrieval improved answer quality significantly. The latency hit was minimal. No reason not to do it.

## What Actually Works in Production

After a lot of trial and error, here's what I landed on:

1. **Filter first, search second.** If you know the document type, date range, or author, filter metadata before doing semantic search. It reduces noise and improves relevance.

2. **Chunk size of 512-1024 tokens with 128-token overlap** works well for most technical documents. Your mileage may vary, but this is a solid starting point.

3. **Evaluate with real questions from real users.** I cannot emphasize this enough. Synthetic benchmarks will lie to you. Real user queries will tell you the truth.

## The Rabbit Hole Goes Deep

I'm now experimenting with agentic RAG — letting the system decide when to retrieve, what to retrieve, and whether to retrieve again based on initial answers. Early results are promising, but the complexity grows fast.

Some days I feel like I'm making real progress. Other days I feel like I'm just stacking abstractions on top of abstractions.

But that's AI work, I guess.

## What I'd Tell Someone Starting Today

Start simple. Get something working end-to-end with basic chunking and a single embedding model. Then measure. Then improve one thing at a time.

The temptation is to build the perfect system from day one. Don't. Build the stupid version first. It will teach you more than all the architecture diagrams in the world.

More updates as I continue down this rabbit hole.
