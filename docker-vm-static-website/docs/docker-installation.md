# Docker Installation

## Environment
- Operating System: Ubuntu Server 22.04 LTS
- Installation Location: Inside Virtual Machine

## Installation Steps

1. Update package index:
   sudo apt update

2. Install Docker:
   sudo apt install docker.io -y

3. Start Docker service:
   sudo systemctl start docker

4. Enable Docker at boot:
   sudo systemctl enable docker

## Verification

- Check Docker version:
  docker --version

- Check Docker service status:
  sudo systemctl status docker

Docker has been successfully installed and is running on the virtual machine.


## Screenshots
Relevant screenshots are available in the `screenshots/` directory.