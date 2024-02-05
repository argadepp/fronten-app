
    curl -O "https://raw.githubusercontent.com/argadepp/frappe-hrms/master/scripts/install_hrms.sh"
    curl -O https://raw.githubusercontent.com/argadepp/frappe-hrms/master/common_site_config.json
    curl -O https://raw.githubusercontent.com/argadepp/frappe-hrms/master/docker-compose.yaml
    chmod +x *
    "./install_hrms.sh" "hrms.pratikargade.online" "hrms"
    