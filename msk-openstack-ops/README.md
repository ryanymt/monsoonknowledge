# 
Cloud File has to be created with the below format. 

clouds:
  mtvexx:
    profile: vexxhost
    auth:
      username: mordred@inaugust.com
      password: XXXXXXXXX
      project_name: mordred@inaugust.com
    region_name: ca-ymq-1
    dns_api_version: 1
  mordred:
    region_name: RegionOne
    auth:
      username: 'mordred'
      password: XXXXXXX
      project_name: 'shade'
      auth_url: 'https://montytaylor-sjc.openstack.blueboxgrid.com:5001/v2.0'
  infra:
    profile: rackspace
    auth:
      username: openstackci
      password: XXXXXXXX
      project_id: 610275
    regions:
    - DFW
    - ORD
    - IAD




## Cloud config would be used by os-client-config
## Cloud config locations are as below. 
/etc/ansible/openstack.yaml 
/etc/openstack/clouds.yaml 
~/.config/openstack/clouds.yaml
