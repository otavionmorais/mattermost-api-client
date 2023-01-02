# Mattermost API Client [UNOFICIAL]

Usage example:

```ts
const client = new MattermostClient({
  baseUrl: 'https://yourchaturl.com',
  login_id: 'yourEmail',
  password: 'yourPassword',
});

const user = await client.login();
console.log(user);

const teams = await client.teams.getTeamsByUser(user.id);
console.log(teams);

const channels = await client.channels.getChannelsByUserAndTeam(
  user.id,
  teams[0].id,
);
console.log(channels);
```

## Work in progress...
