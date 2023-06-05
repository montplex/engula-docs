---
sidebar_position: 4
---

# Release Notes

This document contains release notes for the changes in each release of Montplex Serverless Cache, up through June 03, 2023.

## June 03, 2023

### Functionality Added or Changed

- Included metrics charts to display key numbers, hit rate, memory usage, and qps.
- Implemented throughput statistics to track read and write bytes.
- Set up a welcome email and verification process for first-time logins.

### Bugs Fixed

- Fixed the issue with email verification for username/password sign up on Auth0. After email verification, a bug was raised that prevented the creation of a cache.

## May 27, 2023

### Functionality Added or Changed

- Included a "pay as you go" option based on capacity, with increments of 100M.
- Implemented a throughput limit for the free start option, with capacity limits of 1G and qps limits of 5000.
- Enabled support for multiple regions, including AWS us-east-1, ap-east-1, and ap-southeast-1.
- Set a limit of 5 serverless cache instances for the free start option, with each instance lasting for 7 days.
- Implemented support for Auth0 login, with social login options including GitHub and Google OAuth.