const skills = [
    {id: 125223, skill: 'using magician cursor tricks', done: true},
    {id: 127904, skill: 'ternery operators', done: true},
    {id: 139608, skill: 'some common CLI commands', done: true}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update,
};

function update(id, skill) {
    const skillObj = skills.find(s => s.id === parseInt(id));
    Object.assign(skillObj, skill);
};

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
};

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
};

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id))
};

function getAll() {
    return skills;
};
