---
layout: blog-post
title: "Building RAG Pipelines: What I've Learned So Far"
date: 2026-06-15
description: "Reflections on building Retrieval-Augmented Generation systems, the pitfalls I encountered, and what actually matters in production."
tags: AI, RAG, LLM, Python
category: findings
---

Over the past few weeks I've been deep into building RAG (Retrieval-Augmented Generation) pipelines for internal tooling at work. Here's what I've found.

## The Naive Approach Doesn't Scale

My first attempt was straightforward: chunk documents, embed them, store in a vector DB, retrieve top-k, stuff into the prompt. It worked for demos. It fell apart with real data.

The main issues:
- **Chunking strategy matters more than the embedding model.** Splitting by fixed token count destroys context. Semantic chunking or sliding windows with overlap gave much better results.
- **Vector similarity alone isn't enough.** Hybrid search (combining BM25 with dense retrieval) consistently outperformed pure vector search on our datasets.
- **Reranking is cheap insurance.** A cross-encoder reranker after initial retrieval improved answer quality significantly with minimal latency overhead.

## What Actually Works in Production

1. **Metadata filtering first, semantic search second.** If you know the document type or date range, filter before you embed.
2. **Chunk size of 512-1024 tokens with 128-token overlap** works well for most technical documents.
3. **Evaluate with real questions from real users**, not synthetic benchmarks.

## What's Next

I'm now experimenting with agentic RAG — letting the system decide when to retrieve, what to retrieve, and whether to retrieve again based on initial answers. Early results are promising but the complexity grows fast.

More updates as I continue down this rabbit hole.
