const { Octokit } = require("@octokit/core");

const repoFilter = new Set();
repoFilter.add("cse360assignment02");


function dayDifference(date1, date2) {
    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24; 
    var timeDiff = Math.abs(date2.getTime() - date1.getTime()); 
    var diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY); 
    return diffDays;
}

function compareDays (a , b){
    if(a.daysAgo < b.daysAgo){
        return -1;
    }
    if (a.daysAgo > b.daysAgo){
        return 1
    }
    return 0
}


export async function getRepos(userName){

    var infoList = [];
    const octokit = new Octokit({ auth: process.env.GIT_KEY })
    const repoList = await octokit.request(`/users/${userName}/repos`);
    const list = await repoList["data"];

    for(var x = 0; x < list.length; x++){
        
        const repoName = list[x]['name'];
        const url = list[x]['html_url'];

        // need to filter out names of repos for things like school assignments
        if(repoFilter.has(repoName)) continue


        var date = list[x]['pushed_at'];
        var daysAgo = dayDifference(new Date(date), new Date());

        infoList.push({
            name: repoName,
            url,
            daysAgo
        }); 

    }

    // we sort the list of projects based on the most recent
    infoList = infoList.sort(compareDays);
    return infoList;
}



