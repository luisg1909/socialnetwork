class User {
    constructor(username, name, email, role = 'regular', avatar = '', password = '', points = 0) {
      this.username = username;
      this.name = name;
      this.email = email;
      this.role = role; // 'admin' or 'regular'
      this.avatar = avatar;
      this.password = password; // Store the password
      this.points = points;
    }
  }
  
  class Post {
    constructor(id, title, content, author, dateCreated = new Date(), image = '') {
      this.id = id;
      this.title = title;
      this.content = content;
      this.author = author; 
      this.dateCreated = dateCreated;
      this.image = image;
    }
  }
  
  export { User, Post };
  