// faranez

const list = {

};

function addTask (task,status) {
    return list[task] = status
};

function changeStatus (status,task) {
    return list[status] =  task;
};

function deleteTask (task) {
    delete list[task];
};

function showList () {
    console.log('TO DO:');
    for(let key in list) {
        if(list[key] == 'do') {
            console.log(key);
        };
    };

    console.log('IN PROGRESS:');
    for(let key in list) {
        if(list[key] == 'inProgress') {
            console.log(key);
        };
    };

    console.log('DONE:');
    for(let key in list) {
        if(list[key] == 'done') {
            console.log(key);
        };
    };

    
};

addTask('run','done');
addTask('swim','do');
addTask('work','do');
addTask('jump','inProgress');
showList();