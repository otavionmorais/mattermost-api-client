# Mattermost API Client [UNOFICIAL]

Usage example:

```ts
import MattermostClient from 'mattermost-api-client';

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

## This project is discontinued.

### The official Mattermost API Javascript driver is a part of "mattermost-redux" project ([Link here](https://github.com/mattermost/mattermost-redux/blob/master/src/client/client4.ts))
