# Virtual Machine Setup

## Host System
- Host Operating System: Windows
- Hypervisor Type: Type-2 (Hosted)
- Hypervisor Software: VirtualBox / VMware

## Guest Operating System
- OS: Ubuntu Server 22.04 LTS

## Virtual Machine Configuration
- CPU: 2 cores
- Memory: 2 GB
- Storage: 20 GB virtual disk
- Network Adapter: NAT

## Setup Steps
1. Created a new virtual machine using a Type-2 hypervisor.
2. Installed Ubuntu Server using official ISO.
3. Created a non-root user during installation.
4. Installed and enabled OpenSSH server.
5. Updated system packages using apt.

## Verification
- OS version verified using `lsb_release -a`
- Internet connectivity tested using `ping`
- SSH service status checked using `systemctl status ssh`

The virtual machine is successfully set up and ready for Docker installation.


## Screenshots
Screenshots related to virtual machine setup are available in the `screenshots/` directory.