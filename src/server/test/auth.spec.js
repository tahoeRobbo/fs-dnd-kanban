import {getUserData} from '../routes/auth-routes'

async function test () {
  await getUserData('Rob')
}

test('Rob')
