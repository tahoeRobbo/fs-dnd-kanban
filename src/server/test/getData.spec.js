import { getCollectionData } from '../server'

async function testGetData () {
  await getCollectionData('groups')
    .then((groups) => console.log('groups from getCollectionData', groups))
    .catch((err) => console.log(`error getting groups ${err}`))

  await getCollectionData('tasks')
    .then((tasks) => console.log('tasks from getCollectionData', tasks))
    .catch((err) => (`error getting groups ${err}`))

  await getCollectionData('users')
    .then((users) => console.log('users from getCollectionData', users))
    .catch((err) => (`error getting groups ${err}`))

  await getCollectionData('comments')
    .then((comments) => console.log('comments from getCollectionData', comments))
    .catch((err) => (`error getting groups ${err}`))
}

testGetData()
  .then(() => { console.log('testGetData SUCCESS'); process.exit() })
  .catch((err) => { console.log(`testGetData FAIL, ${err}`); process.exit() })
