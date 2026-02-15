# Virtual Machine Networking Configuration

## Networking Modes

### NAT (Network Address Translation)
- VM shares the host system’s internet connection
- Simple and reliable configuration
- Suitable for development and testing

### Bridged Networking
- VM appears as a separate device on the local network
- Receives its own IP address
- Suitable for server access from other devices

## Current Configuration
- Network Mode: NAT
- Reason: Ensures stable internet access during setup

## Network Verification
- IP address checked using `ip a`
- Internet access tested using `ping google.com`

## Future Changes
In later phases, the network mode may be changed to Bridged
to allow external access to hosted services.


## Screenshots
Network verification screenshots are available in the `screenshots/` directory.