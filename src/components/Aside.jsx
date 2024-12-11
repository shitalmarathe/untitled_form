import {
     TbMessageCircle, 
     TbBrandFacebook,
     TbBrandLinkedin,
     TbBrandX,
     TbMap2,
     TbPhone
   
}from "react-icons/tb"



function Aside(){
 const contacts =[
     {
          id : 0,
          icon : TbMessageCircle ,
          title :"Chat to us",
          description :"Our friendly team",
          action:"hi@untitledui.com"
     },
     {
          id: 1,
          title: "Visit us",
          description: "Come say hello at our office HQ",
          action: "100 Smith Street Collingwood VIC 3066 AU",
          icon: TbMap2,
        },
        {
          id: 2,
          title: "Call us",
          description: "Mon-Fri from 8am to 5pm.",
          action: "+1 (555) 000-0000",
          icon: TbPhone,
        }
     ]
      return(
          <section className="flex min-h-full flex-col justify-between"> 
               <div>
                    {contacts.map((contact)=>{
                         return(
                              <div key={contact.id} className="mb-5">
                                   <contact.icon size={25} className="text-lime-700"/>
                                   <h3 className="text-lg font-bold">{contact.title}</h3>
                                   <p className="mb-2 font-slate-700">{contact.description}</p>
                                   <p>{contact.action}</p>
                              </div>
                         );
                    })}
              </div>

      <footer className="flex gap-2 text-2xl text-lime-800">
        <TbBrandFacebook className="cursor-pointer" />
        <TbBrandLinkedin className="cursor-pointer" />
        <TbBrandX className="cursor-pointer" />
      </footer>
      
      </section>
     );

}

export default Aside;

