---
layout: blog-post
title: "Exploring Embedded Linux: From Microcontrollers to Linux Boards"
date: 2026-05-28
description: "My journey from bare-metal embedded to embedded Linux, and why the transition changes how you think about systems."
tags: Linux, Embedded, Kernel, Systems
category: findings
---

I've been working primarily with bare-metal and RTOS-based embedded systems. Recently, I started exploring embedded Linux more seriously. Here's what's different and what I've learned.

## The Mental Model Shift

On bare-metal, you control everything. Every byte of RAM, every interrupt, every peripheral register. On embedded Linux, you're a guest in someone else's operating system. This changes how you approach problems.

**Bare-metal thinking:** "I'll allocate this buffer at address 0x20000000"
**Linux thinking:** "I'll ask the kernel for memory and trust it to manage things"

The tradeoff is clear: you give up control but gain abstraction, driver ecosystems, networking stacks, and the ability to run multiple processes.

## What Surprised Me

1. **Device trees are actually elegant.** Once you understand the problem they solve (describing hardware to the kernel without polluting kernel source), the design makes sense.

2. **The real-time problem is real.** Even with PREEMPT_RT patches, achieving consistent sub-millisecond latency on Linux is hard. For hard real-time, you still need a co-processor or a separate RTOS.

3. **Yocto is powerful but has a learning curve.** Building a custom Linux distribution from scratch is initially overwhelming, but once you understand the layers, it's incredibly flexible.

## Practical Applications

For my current projects, I see a hybrid approach emerging:
- **Bare-metal/RTOS** for real-time sensor processing and actuator control
- **Embedded Linux** for connectivity, data aggregation, and ML inference
- **Communication** between the two via shared memory or SPI

This isn't new — it's basically what modern cars do with their ECUs. But implementing it yourself gives you a deep appreciation for the architecture.

## Resources That Helped

- The Linux Foundation's embedded Linux courses
- `Building Embedded Linux Systems` by Yaghmour
- Playing with Raspberry Pi and BeagleBone for hands-on experimentation

More as I go deeper.
