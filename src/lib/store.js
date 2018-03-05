import faker from 'faker';
import _ from 'underscore';

const userIds = [];
const users = {};
_.times(12, () => {
    const user = generateUser();
    userIds.push(user.id);
    users[user.id] = user;
});

function generateUser() {
    const id = faker.random.uuid();
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    return {
        id,
        firstName,
        lastName,
        prettyName: `${firstName} ${lastName}`,
        avatar: faker.internet.avatar(),
        title: faker.name.jobTitle(),
    };
}

const usersWithIMs = [];
const threadIds = [];
const threads = {};

function generateThread() {
    const id = faker.random.uuid();
    const isIM = (
        usersWithIMs.length === userIds.length
            ? false
            : faker.random.boolean()
    );
    const isRoom = isIM ? false : faker.random.boolean();
    const memberCount = isIM ? 1 : faker.random.number({ min: 2, max: 11 });
    const members = (
        isIM
            ? _.sample(_.difference(userIds, usersWithIMs), memberCount)
            : _.sample(userIds, memberCount)
    );
    if (isIM) {
        usersWithIMs.push(members[0]);
    }
    const nameSize = faker.random.number({ min: 1, max: 3 });
    const memberObjs = _.filter(users, user => _.contains(members, user.id));
    const name = (
        isRoom
            ? faker.lorem.words(nameSize)
            : _.pluck(memberObjs, 'firstName').join(', ')
    );
    const lastMessage = faker.random.arrayElement([
        faker.lorem.sentence(),
        faker.hacker.phrase(),
        faker.company.catchPhrase(),
    ]);
    return {
        id,
        name,
        lastMessage,
        lastTimestamp: Date.now() - faker.random.number(),
        memberCount,
        members,
        avatars: _.pluck(memberObjs, 'avatar'),
        type: isRoom ? 'ROOM' : 'IM',
    };
}
const threadCount = faker.random.number({ min: 5, max: 25 });
_.times(threadCount, () => {
    const thread = generateThread();
    threadIds.push(thread.id);
    threads[thread.id] = thread;
});


const store = {
    userIds,
    users,
    threadIds,
    threads,
};

export default store;
