# Cloudflare Tunnel for Public Access

## Problem Statement
The virtual machine hosting Docker containers does not have a public IP address.
Due to NAT-based networking, services running inside the VM are not directly accessible
from the public internet.

## Solution
To overcome this limitation, Cloudflare Tunnel was used to securely expose the Docker-based
service to the public internet without requiring a public IP address or port forwarding.

## What is Cloudflare Tunnel
Cloudflare Tunnel creates an outbound, encrypted connection from the server to the Cloudflare
network. Public requests are routed through Cloudflare to the local service via this tunnel.

## Architecture Overview
- Docker service runs inside Ubuntu Server VM
- Cloudflare Tunnel agent runs on the server
- Cloudflare provides a public URL
- Requests are securely forwarded to the local service

## Advantages
- No public IP required
- No inbound ports opened
- Secure by default
- Suitable for development and testing environments

## Usage in This Project
Cloudflare Tunnel was configured after the virtual machine setup to allow public access
to Docker-hosted services during later phases of the project.
