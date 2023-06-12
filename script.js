const userBar = document.getElementById('userid');

async function getGitHubProfile(username) {
    const result = await fetch(`https://api.github.com/users/${username}`);
    const data = await result.json();
    document.querySelector(".avimg").src = data.avatar_url;
    document.querySelector(".username").innerHTML = data.name;
    document.querySelector(".gitid").innerHTML = data.id;
    document.querySelector(".userbio").innerHTML = data.bio;
    document.querySelector(".url").innerHTML = data.url;
    document.querySelector(".followers-count").innerHTML = data.followers;
    document.querySelector(".mail").innerHTML = data.email;
    document.querySelector(".comp").innerHTML = data.company;
    document.querySelector(".hire").innerHTML = data.hireable;
    console.log(data);
}

document.addEventListener('keypress', () => {
    getGitHubProfile(userBar.value);
})
