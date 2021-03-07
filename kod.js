//Lütfen bunu main dosyanıza atınız.
client.irilian = {
prefix: "Lütfen prefixinizi yazınız."


};

//Message.js prefix yerinizle değiştirin.
let p = client.irilian.prefix;
            if(message.content.startsWith(`<@!${client.user.id}>`)) p = `<@!${client.user.id}> `
            if(!message.content.startsWith(p)) return; //Eklenmezse, tüm mesajlarda dener.


//Prefix yeri ne mi olabilir? 🤔
if (!message.content.startsWith(ayarlar.prefix)) return;
//Bu şekilde olabileceğini düşünmekteyim. Her altyapıya göre değişmektedir. Herhangi bir sorununuz olduğu zaman; DC: sadece irilian#2833. İyi kullanımlar!
