const submitBtn = document.getElementById('submitBtn');
const fileInput = document.getElementById('upload');
const notifications = document.getElementById('notifications');
const downloadZone = document.getElementById('download-zone');

submitBtn.addEventListener('click',async (e)=>{
    e.preventDefault();
    
    const files = fileInput.files[0];

    if(!files){
        toastNotification('error','No files selected',5000);
        return;
    }

    const formData = new FormData();
    for(const file of fileInput.files){
        formData.append('files',file);
    }

    try{
        toastNotification('info','Processing...');
        submitBtn.disabled = true;
        const res = await fetch('/resize-images',{
            method: 'POST',
            body: formData
        });

        if(!res.ok){
            console.log('Main hu');
            toastNotification('error','Something went wrong',5000);
            return;
        }

        const {downloadLinks} = await res.json();

        createDownloadableLinks(downloadLinks);

        toastNotification('success','Image resize done',5000);
        fileInput.value = "";
    }catch(e){
        console.log(e);
        toastNotification('error','Something went wrong',5000);
    }finally{
        submitBtn.disabled = false;
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

function createDownloadableLinks(links){
    for( const link of links){
        const aTag = document.createElement('a');
        aTag.href = `/download/${link}`;
        aTag.innerText = 'Download image here';
        downloadZone.append(aTag);
    }
}