import swift from '../assets/images/swift.png';
import android from '../assets/images/android.png';
import react from '../assets/images/react.png';
import nodejs from '../assets/images/nodejs.png';
import spring from '../assets/images/spring.png';
import postgres from '../assets/images/postgres.png';
import mongodb from '../assets/images/mongodb-logo.png';
import redis from '../assets/images/redis.png';
import gcloud from '../assets/images/gcloud.png';
import heroku from '../assets/images/heroku.png';
import travisci from '../assets/images/travisci.png';

export const temp = () => {
  return [
    {"id": "0",
      "title": "Frontend & Mobile",
      "skills":
          [
            {"id": "00",
              "title": "iOS Swift",
              "image": swift,
              "items": ["AutoLayout", "MVC, Singleton, Delegate", "Networking - Alamofire, Socket.io", "CoreData & Realm", "Test Flight"]
            },
            {"id": "01",
              "title":"Android Java",
              "image": android,
              "items": ["Layouts - Linear/Grid", "Google Maps", "Persistent Storage Room", "Networking - Retrofit"]
            },
            {"id": "02",
              "title": "React.js",
              "image": react,
              "items": ["Redux", "Redux-thunk", "Testing - Jest & Enzyme", "REST & GraphQL","React-Router", "SockJS", "Socket.io" ,"Styled Components", "Sass/SCSS", "Webpack"]
            }
          ]
    },
    {"id": "1",
      "title": "Backend",
      "skills":
          [
            {"id": "10",
              "title": "Node.js",
              "image": nodejs,
              "items": ["Express", "MVC", "Socket.io", "GraphQL", "Mongoose", "Auth - JWT & OAuth 2.0", "Passport.js", "AWS S3", "Google Cloud", "Heroku"]
            },
            {"id": "11",
              "title":"Java Spring",
              "image": spring,
              "items": ["Spring", "JPA", "Spring Security", "Lombok" ,"SockJS", "Stomp"]
            }
          ]
    },
    {"id": "2",
      "title": "Database",
      "skills":
          [
            {"id": "20",
              "title": "PostgreSQL",
              "image": postgres,
              "items": ["CRUD", "Joins", "Aggregate & GroupBy", "Union & Intersect & Concat", "Indexing"]
            },
            {"id": "21",
              "title":"MongoDB",
              "image": mongodb,
              "items": ["Mongoose", "CRUD", "Aggregate", "Indexing", "Geospatial", "Transactions"]
            },
            {"id": "22",
              "title":"Redis",
              "image": redis,
              "items": ["Sets", "Lists & Hashes", "Publish/Subscribe", "Streams", "Geospatial", "Transactions", "HyperLogLog"]
            }
          ]
    },
    {"id": "3",
      "title": "Continuous Integration/Deployment",
      "skills":
          [
            {"id": "30",
              "title": "Google Cloud Platform",
              "image": gcloud,
              "items": ["Storage", "Build", "Kubernetes"]
            },
            {"id": "31",
              "title":"Travis CI",
              "image": travisci,
              "items": ["Build"]
            },
            {"id": "32",
              "title":"Heroku",
              "image": heroku,
              "items": ["Pipelines", "Builds"]
            }
          ]
    }
  ];
};