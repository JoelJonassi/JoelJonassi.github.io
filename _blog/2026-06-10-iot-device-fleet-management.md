---
layout: blog-post
title: "IoT Device Fleet Management: What I'm Building Right Now"
date: 2026-06-10
description: "A look at what I'm currently working on at Linovt — managing fleets of IoT devices with constrained resources and unreliable networks."
tags: IoT, Embedded, MQTT, Python
category: work-in-progress
---

Most of my day-to-day at Linovt involves keeping hundreds of IoT devices alive and communicating. It sounds straightforward. It is not.

Here's what I'm actually building right now.

## The Problem

We have hundreds of devices spread across different locations. Each one runs on constrained hardware — think ARM Cortex-M class. Each one has intermittent connectivity. And each one needs to operate autonomously for weeks at a time.

The three hard problems:

**OTA updates over unreliable networks.** You can't guarantee a device will stay connected long enough to download a full firmware image. So what do you do?

**State synchronization.** A device goes offline for hours. When it comes back, how do you reconcile what happened while it was gone?

**Health monitoring at scale.** Which devices are alive? Which are degraded? Which are silently failing and nobody knows yet?

## How I'm Solving Them

### Delta Updates

Instead of sending full firmware images, I implemented a delta-update system using bsdiff. Devices download only the binary diff between their current version and the target version. They patch locally, verify the checksum, and reboot.

This reduced our update payload by about 85%. What used to take 20 minutes now takes 3. Game changer.

### CRDTs for State Sync

For state reconciliation, I turned to CRDTs — Conflict-free Replicated Data Types. Each device maintains a last-writer-wins register for its telemetry data. When it reconnects, it merges local state with cloud state. No conflicts. No data loss.

It took me a while to wrap my head around CRDTs. But once I did, the state sync problem basically disappeared.

### MQTT + Last Will

All devices connect via MQTT. We use the Last Will and Testament feature so the broker automatically publishes a "device offline" message when a connection drops unexpectedly. Combined with periodic heartbeats, we get a reasonable picture of fleet health without polling every device.

## What's Next

I'm working on a lightweight edge agent that can run small ML models on-device for anomaly detection. The goal: reduce cloud dependency and enable real-time alerts even when connectivity is poor.

This is the kind of problem I love. Constrained resources. Real-world messiness. Solutions that have to actually work, not just look good in a demo.

More updates as I build.
