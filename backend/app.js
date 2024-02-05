const express = require('express');
const { exec } = require('child_process');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/execute-command', (req, res) => {
    const { ip, user, password, port, application, domain } = req.body;

    if (!ip || !user || !password || !port || !application || !domain) {
        return res.status(400).json({ error: 'All parameters are required' });
    }

    res.status(200).json({ message: 'Command execution initiated. Check back later for results.' });

    // Execute the command in the background
    executeCommand(ip, user, password, port, application, domain);
});

function executeCommand(ip, user, password, port, application, domain) {
    const command = `
        sshpass -p "${password}" ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -p ${port} ${user}@${ip} '
        cd /path/to/your/app;
        curl -O "https://raw.githubusercontent.com/argadepp/frappe-hrms/master/scripts/install_${application}.sh";
        curl -O https://raw.githubusercontent.com/argadepp/frappe-hrms/master/common_site_config.json;
        curl -O https://raw.githubusercontent.com/argadepp/frappe-hrms/master/docker-compose.yaml;
        chmod +x *;
        "./install_${application}.sh" "${domain}" "${application}";
        '
    `;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error('Error during command execution:', error.message);
        } else {
            console.log('Command executed successfully:', stdout);
        }
    });
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});