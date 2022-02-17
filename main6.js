const list = [];

function addTask (task,status,priority) {
    list.push({'task': task,'status': status,'priority':priority});
};
function changeStatus (task,status) {
    list.find((item) => {
        if (item.task === task) {
            item.status = status;
        };
    });
};
function changePriority (task,priority) {
    list.find((item) => {
        if(item.task === task) {
            item.priority = priority;
        };
    });
};
function showList () {
    console.log('Done:');
    for(let key of list) {
        if(key.status === 'done') {
            console.log(key.task);
        };

    };
    console.log('Do:');
    for(let key of list) {
        if(key.status === 'do') {
            console.log(key.task);
        };

    };
    console.log('In Progress:');
    for(let key of list) {
        if(key.status === 'inProgress') {
            console.log(key.task);
        };

    };

};
function deleteTask (task) {
    for(let key of list) {
        if(key.task === task) {
            list.pop(key);
        }
    }

};

addTask('run','done','high');
addTask('work','do','high');
changeStatus('work','done');
changePriority('run','low');

