
    const auth = JSON.parse(localStorage.getItem('token'));

    if( auth) {
        const classList = document.getElementById('root').classList;
    
        classList.remove('unselectable')
    }





