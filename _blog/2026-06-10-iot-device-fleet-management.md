---
layout: blog-post
title: "IoT Device Fleet Management: Current Work at Linovt"
date: 2026-06-10
description: "A look at what I'm currently working on — managing fleets of IoT devices with constrained resources and unreliable networks."
tags: IoT, Embedded, MQTT, Python
category: work-in-progress
---

Most of my day-to-day work at Linovt involves IoT systems. Here's a snapshot of what I'm currently building.

## The Challenge

We're deploying hundreds of devices across different locations. Each device runs on constrained hardware (ARM Cortex-M class), has intermittent connectivity, and needs to operate autonomously for extended periods.

The core problems:
- **OTA updates over unreliable networks** — devices can't always receive a full firmware image in one session
- **State synchronization** — when a device comes back online after hours offline, how do you reconcile its state with the cloud?
- **Health monitoring at scale** — knowing which devices are alive, which are degraded, and which are silently failing

## My Current Approach

### Delta Updates for OTA
Instead of sending full firmware images, I implemented a delta-update system using bsdiff. Devices download only the binary diff, patch locally, and verify before applying. This reduced our update payload by ~85%.

### CRDTs for State Sync
For state reconciliation, I'm using CRDTs (Conflict-free Replicated Data Types). Each device maintains a last-writer-wins register for its telemetry data. When it reconnects, it merges its local state with the cloud state. No conflicts, no data loss.

### MQTT with Last Will and Testament
All devices connect via MQTT. We use LWT (Last Will and Testament) so the broker automatically publishes a "device offline" message if a connection drops unexpectedly. Combined with periodic heartbeats, this gives us a reasonable view of fleet health.

## What's Coming

I'm now working on a lightweight edge agent that can run small ML models on-device for anomaly detection. The goal is to reduce cloud dependency and enable real-time alerts even when connectivity is poor.

This is the kind of problem I love — constrained resources, real-world messiness, and solutions that have to actually work.
