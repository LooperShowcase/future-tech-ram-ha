//sk-BFXn6S1AlIDqGCX7xe3YT3BlbkFJbnCYChNgKO6BHhVvfx2
 

function darkFunction() {
   document.body.style.background="black"

}


 function lightFunction() {
    document.body.style.background="cyan"
   }

    let open_response ;
    let chat =[
      {role:"user", content : " Hi"},
   {role:"assistant", content : "Hi, how can i help you today"}

    ];
    async function chatuserAdd(feeling,question){
      chat.push({role:"user" , content:"my happiness from 0-10 is: " + feeling+". my input is :"+question});
    }

async function chatAssistantAdd(res){
   chat.push({role:"assistant" , content:res});


}
    async function openai_test(){
      let url ="https://api.openai.com/v1/chat/completions";

let part1 = "sk";
let part2 = "-FwTAQ8hQ31W8irBwTpMXT3BlbkFJ";
let part3 = "tqFgcpK3EZmVIOsoPEKV";

let APIkey = part1 + part2 + part3;


   let data ={
      model:"gpt-3.5-turbo",
      messages : chat
   }
   
   try{
      const response = await fetch (url,{
         method: "POST",
         headers:{
            "Content-Type": "application/json",
            Authorization : `Bearer ${APIkey}`
         },
         body : JSON.stringify (data)
      })
      if(response.ok){
         const responseData=await response.json();
         const message=responseData.choices[0].message.content;
         chatAssistantAdd(message)
      const speech = new SpeechSynthesisUtterance(message);
         speechSynthesis.speak(speech);
         return message;
      }
   }catch(error){
      console.log("opps an error :"+error);
   }
   

}
    
 


