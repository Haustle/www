
const fetch = require('node-fetch');

function dayDifference(date1, date2) {
    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24; 
    var timeDiff = Math.abs(date2.getTime() - date1.getTime()); 
    var diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY); 
    return diffDays;
}


// async function getRepos(userName) {
export async function getRepos(userName){

    var infoList = [];
    const repoList = await fetch(`https://api.github.com/users/${userName}/repos`);
    debugger;

    const list = await repoList.json();
    for(var x = 0; x < list.length; x++){
        
        const repoName = list[x]['name'];
        const url = list[x]['html_url'];

        var commits = await fetch(`https://api.github.com/repos/${userName}/${repoName}/commits/master`);
        const recentCommit = (await commits.json())['commit'];

        var date = recentCommit['committer']['date']
        var daysAgo = dayDifference(new Date(date), new Date());

        infoList.push({
            name: repoName,
            url,
            daysAgo
        }); 


    
    }
    return infoList;
}

