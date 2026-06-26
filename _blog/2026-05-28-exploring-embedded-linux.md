---
layout: blog-post
title: "Exploring Embedded Linux: From Microcontrollers to Linux Boards"
date: 2026-05-28
description: "My journey from bare-metal embedded to embedded Linux, and why the transition changes how you think about systems."
tags: Linux, Embedded, Kernel, Systems
category: findings
---

I've spent most of my career writing code that runs directly on metal. No OS. Just my code, the registers, and a prayer. Recently, I started diving into embedded Linux. And wow it is a different beast.

**Here's what surprised me the most.**

## You Lose Control (And That's Okay)

On bare-metal, you own everything. Every byte of RAM. Every interrupt. Every peripheral register. You are the god of your little microcontroller universe.

On embedded Linux? You're a guest. The kernel decides when your code runs. It manages memory. It handles drivers. You have to *ask* for things instead of just taking them.

At first, this felt wrong. I kept thinking: *but I know exactly what this hardware needs, why can't I just tell it what to do?*

Then I realized - the tradeoff is worth it. You give up some control, but you gain networking stacks, filesystems, multi-tasking, and an entire ecosystem of drivers that someone else already debugged for you.

## Device Trees Are Actually Cool

I'll admit it - when I first heard about device trees, I rolled my eyes. Another abstraction layer? Really?

But once I understood the problem they solve, I changed my mind. Device trees let you describe hardware to the kernel without modifying kernel source. You can support different board revisions with different device tree files. No forking. No messy ifdefs.

It's elegant in a way that only makes sense after you've struggled with the alternative.

## The Real-Time Problem is Real

Here's the thing nobody tells you about embedded Linux: real-time is hard.

Even with PREEMPT_RT patches, getting consistent sub-millisecond latency is genuinely difficult. Linux is designed for throughput and fairness, not deterministic timing. If you need hard real-time - like, *the robot arm must stop NOW or something breaks* - you still need a co-processor or a separate RTOS.

I learned this the hard way. Now my designs use a hybrid approach:
- **Bare-metal/RTOS** for time-critical sensor processing and actuator control
- **Embedded Linux** for connectivity, data aggregation, and ML inference
- **SPI or shared memory** to bridge the two

It's basically what modern cars do. Implementing it yourself gives you a whole new appreciation for automotive engineers.

## Yocto is Powerful (and Painful)

Building a custom Linux distribution with Yocto is like assembling IKEA furniture - the instructions exist, but you will still end up confused and sweaty at 2 AM.

The learning curve is steep. Layers, recipes, bitbake. It took me weeks to feel comfortable. But now? I can spin up a custom Linux build for any board in a few hours. The flexibility is unmatched.

## What I'd Tell My Past Self

If I could go back and give myself advice:

1. **Start with a Raspberry Pi or BeagleBone** - you can get Linux running in minutes, not days
2. **Read the Linux Foundation's embedded Linux courses** - they're worth every minute
3. **Buy "Building Embedded Linux Systems" by Yaghmour** - it aged well
4. **Expect to feel lost for the first month** - that's normal

This journey from bare-metal to embedded Linux has been humbling. But every time I get a complex system working, networking, sensors, ML inference, all running on a tiny Linux board - it feels like magic.

And honestly? That feeling never gets old.

More as I go deeper.
