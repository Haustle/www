// we will hardcode master as the default branch for now
// but because github is moving away from master -> main I'll be back in this branch soon

const https = require("https");
function getCommitDate(userName, repoName, branch="master") {
    var baseurl = 'api.github.com';

    var url = `/repos/${userName}/${repoName}/commits/${branch}`;
    var options = {
        hostname: baseurl,
        path: url,
        method: 'GET',
        headers: { 'user-agent': 'www' }
    }
    options.agent = new https.Agent(options);
    https.get(options, res => {

        let data = ""

        res.on("data", d => {
            data += d
        })
        res.on("end", () => {
            var obj = JSON.parse(data)

            // to see where im grabbing these to parse print data
            console.log(obj);
            const commit = obj['commit'];
            var message = commit['message'];
            var name = commit['committer']['name'];
            var date = commit['committer']['date'];

            resObj = {
                name,
                date,
                message
            }
            console.log(resObj);
            return resObj;

        })
    })

}
getCommitDate("haustle", "www")

