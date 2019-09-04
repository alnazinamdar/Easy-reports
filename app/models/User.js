class User {
    constructor(){
        
    }
    create_user(){
        const query = "INSERT INTO user(name, lastName) VALUES...";
        mysql_connection().query(query);
    }
    get_user(){
        mysql_connection().query('SELECT * FROM user WHRE user_id=1');
    }
    edit_user(){

    }
    delete_user(){

    }
    
    
}