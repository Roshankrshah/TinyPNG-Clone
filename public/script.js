const submitBtn = document.getElementById('submitBtn');
const fileInput = document.getElementById('upload');
const notifications = document.getElementById('notifications')

submitBtn.addEventListener('click',async (e)=>{
    e.preventDefault();
    
    const files = fileInput.files;

    if(files.length === 0){
        toastNotification('error','No files selected',5000);
        return;
    }

    const formData = new FormData();
    for(const file of files){
        formData.append('files',file);
    }

    try{
        toastNotification('success','Processing...');
        const res = fetch('/resize-images',{
            method: 'POST',
            body: formData
        });

        if(!res.ok){
            toastNotification('error','Something went wrong',5000);
            return;
        }

        const data = await res.json();
        console.log(data);
        toastNotification('success','Processing...');
    }catch(e){
        console.log(e);
        toastNotification('error','Image resize done',5000);
    }

});

function toastNotification(type ,message, time){
    const pEl = document.createElement('p');
    pEl.innerText = message;
    pEl.classList.add('notification');
    pEl.classList.add(type);

    notifications.innerHTML = '';
    notifications.append(pEl);

    if(time>0){
        setTimeout(()=>{
            notifications.innerHTML = "";
        },time);
    }
}