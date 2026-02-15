# System Architecture

The system follows a layered architecture:

1. Physical Machine running Window OS
2. Type-2 Hypervisor installed on Window OS
3. Linux Virtual Machine created using the hypervisor
4. Docker installed inside the virtual machine
5. Nginx container used to serve a static website

This architecture reflects commonly used development and cloud deployment environments.
