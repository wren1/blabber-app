
| Users |
| --------------------- |
| id PK int |
| email string not null |
| username string not null |
| hashedPassword not null string |
| name string |
| description string |
| iconUrl string |

| Groups |
| ---------------- |
| id PK int |
| userId int FK not null |
| name string not null |
| description string |
| private bool default false |

| usersToGroups |
| ---------------- |
| id PK int |
| userId int FK not null |
| groupId int FK not null |

| Posts |
| -------------------- |
| id PK int |
| userId int FK not null |
| groupdId int FK |
| title string not null |
| content string not null |
| createdOn date not null |
| lastModified date not null |

| Comments |
| -------- |
| id PK int |
| postId int FK not null |
| content string not null |
| lastCreated date not null |
| lastModified date not null |

| Friends |
| -------------------- |
| id PK int |
| userOneId int FK not null |
| useTwoId int FK not null |

| Likes |
| ---------------- |
| id PK int |
| userId int FK not null |
| postId int FK not null |

| Moderators |
| ---------------- |
| id PK int |
| userId int FK not null |
| groupId int FK not null |

| Invites |
| --------------------- |
| id int PK |
| inviterId int FK not null |
| inviteeId int FK  not null |
| groupId int FK |
| type string not null |

