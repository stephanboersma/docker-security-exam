# docker-security-exam
This repository contains 3 different docker-compose setups in the folders `default`, `scenario_01`, and `scenari_02`. Furthermore, two simple webservices in a Node.js environment can be found in the folders `api` and `website`.

# Setup
- Clone repository.
- Change directory to either `default`, `scenario_01`, or `scenario_02` and run `docker-compose up -d --build`
Run `docker ps` to see active containers running
Run `docker exec -it attacker_${default || scenario1 || scenario2} /bin/bash`to jump into the attacker container
Install msfconsole in the attacker container by running `apt-get update && apt-get install metasploit-framework && sudo service postgresql start && sudo msfdb init`

## Containers
- attacker -> Kali linux
- metasploitable -> metasploitable2 setup
- website -> node.js hosting a simple website
- api -> node.js api with unsecure eval

# Troubleshooting
If no services are exposed on the metasploitable container then enter the container by running `docker exec -it metasploitable_${default || scenario1 || scenario2}` and execute the following command: `bash -c /bin/services.sh`.
