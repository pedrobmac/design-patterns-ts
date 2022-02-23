import { SystemUserProxy } from './system-user/system-user-proxy';

async function clientCode(): Promise<void> {
  const user = new SystemUserProxy('Rafael', 'userRafael');
  console.log('Taking 2 secs to fetch the addresses...');
  console.log(await user.getAddresses());

  for (let i = 0; i < 5; i++) {
    console.log('fetching again...');
    console.log(await user.getAddresses());
  }
}

clientCode();
