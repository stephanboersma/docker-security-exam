# docker-security-exam

# Setup

Clone repository.
Change directory to `/01_bridge_network` and run `docker-compose up -d --build`
Run `docker ps` to see active containers running
Run `docker exec -it attacker /bin/bash`to jump into the attacker container

## Containers
- attacker -> Kali linux
- metasploitable -> metasploitable2 setup
- website -> node.js hosting a simple website
- api -> node.js api with unsecure eval
