import { Injectable } from '@angular/core';
import {BlogModel} from "../blog-model.model";

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {
  allBlogs;
  blogById;

  constructor() {
  }

saveBlogs(){
  let data = [
    {
      "_id": "6168115c9e2e050008aa203c",
      "slug": "hitesh",
      "title": "hitesh",
      "content": "hkasjkldxklaskljkl☺☺",
      "metafields": [
        {
          "title": "Author",
          "key": "author",
          "type": "text",
          "value": "harshal"
        },
        {
          "title": "Description",
          "key": "description",
          "type": "text",
          "value": "hitesh blogg"
        },
        {
          "title": "Blog Image",
          "key": "blogImage",
          "type": "text",
          "value": "https://image.shutterstock.com/image-photo/modern-desktop-computer-wireless-keyboard-260nw-55573504.jpg"
        }
      ],
      "bucket": "5bab3c41f69d9e4f0a0408ba",
      "type_slug": "blogs",
      "created": "2021-10-14T11:15:40.687Z",
      "created_at": "2021-10-14T11:15:40.687Z",
      "modified_at": "2021-10-14T11:15:40.687Z",
      "status": "published",
      "locale": null,
      "published_at": "2021-10-14T11:15:40.687Z",
      "metadata": {
        "author": "harshal",
        "description": "hitesh blogg",
        "blogImage": "https://image.shutterstock.com/image-photo/modern-desktop-computer-wireless-keyboard-260nw-55573504.jpg"
      }
    },
    {
      "_id": "616a9f30dff753000913933b",
      "slug": "sudhirr",
      "title": "sudhirr",
      "content": "helloo",
      "metafields": [
        {
          "title": "Author",
          "key": "author",
          "type": "text",
          "value": "sudhir"
        },
        {
          "title": "Description",
          "key": "description",
          "type": "text",
          "value": "sudhir blogg"
        },
        {
          "title": "Blog Image",
          "key": "blogImage",
          "type": "text",
          "value": "https://media.wired.com/photos/5f63ea43470e71528f4f8876/master/pass/Gear-Laptop-Monitor-159167665.jpg"
        }
      ],
      "bucket": "5bab3c41f69d9e4f0a0408ba",
      "type_slug": "blogs",
      "created": "2021-10-16T09:45:20.114Z",
      "created_at": "2021-10-16T09:45:20.114Z",
      "modified_at": "2021-10-16T09:45:20.114Z",
      "status": "published",
      "locale": null,
      "published_at": "2021-10-16T09:45:20.114Z",
      "metadata": {
        "author": "sudhir",
        "description": "sudhir blogg",
        "blogImage": "https://media.wired.com/photos/5f63ea43470e71528f4f8876/master/pass/Gear-Laptop-Monitor-159167665.jpg"
      }
    },
    {
      "_id": "6172462c33b3c600083bd07e",
      "slug": "hhhh",
      "title": "hhhh",
      "content": "knnnnnnnnnnnnnnnnnnnnnnnnnn",
      "metafields": [
        {
          "title": "Author",
          "key": "author",
          "type": "text",
          "value": "harish11"
        },
        {
          "title": "Description",
          "key": "description",
          "type": "text",
          "value": "jjjj"
        },
        {
          "title": "Blog Image",
          "key": "blogImage",
          "type": "text",
          "value": "C:\\Users\\Harish\\Desktop"
        }
      ],
      "bucket": "5bab3c41f69d9e4f0a0408ba",
      "type_slug": "blogs",
      "created": "2021-10-22T05:03:40.607Z",
      "created_at": "2021-10-22T05:03:40.607Z",
      "modified_at": "2021-10-22T05:03:40.607Z",
      "status": "published",
      "locale": null,
      "published_at": "2021-10-22T05:03:40.607Z",
      "metadata": {
        "author": "harish11",
        "description": "jjjj",
        "blogImage": "C:\\Users\\Harish\\Desktop"
      }
    },
    {
      "_id": "61ed9cdd7cef2600087fe173",
      "slug": "titulo-de-prueba",
      "title": "Titulo de prueba",
      "content": "vamos a probar este proyecto",
      "metafields": [
        {
          "title": "Author",
          "key": "author",
          "type": "text",
          "value": "mosuna"
        },
        {
          "title": "Description",
          "key": "description",
          "type": "text",
          "value": "Es una prueba"
        },
        {
          "title": "Blog Image",
          "key": "blogImage",
          "type": "text",
          "value": ""
        }
      ],
      "bucket": "5bab3c41f69d9e4f0a0408ba",
      "type_slug": "blogs",
      "created": "2022-01-23T18:22:21.521Z",
      "created_at": "2022-01-23T18:22:21.521Z",
      "modified_at": "2022-01-23T18:22:21.521Z",
      "status": "published",
      "locale": null,
      "published_at": "2022-01-23T18:22:21.521Z",
      "metadata": {
        "author": "mosuna",
        "description": "Es una prueba",
        "blogImage": ""
      }
    },
    {
      "_id": "5bab5357dd33da5d40954215",
      "slug": "christmas-traditions-around-the-world",
      "title": "Christmas Traditions Around the World",
      "content": "<div class=\"ggt-disc\" style=\"box-sizing: inherit;\"><p style=\"box-sizing: inherit; margin-right: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-size: 20px;\">Children in Brazil often receive gifts from the Magi on Three Kings Day, or Epiphany, as well as from Papai Noel on Christmas Eve. With no use for chimneys in the tropical climate, they believe Papai Noel enters via the front door, and travels via helicopter rather than a reindeer-drawn sleigh.</span></p><p style=\"box-sizing: inherit; margin-right: 0px; margin-left: 0px; padding: 0px;\"><br></p><p style=\"box-sizing: inherit; margin-right: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-size: 20px;\">Puritan Oliver Cromwell made Christmas illegal in England from 1647-1660, claiming it was immoral to hold a celebration on one of the year&rsquo;s holiest days.</span></p><p style=\"box-sizing: inherit; margin-right: 0px; margin-left: 0px; padding: 0px;\"><br></p><p style=\"box-sizing: inherit; margin-right: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-size: 20px;\">In the Czech Republic, Santa doesn&rsquo;t come on Christmas but on St. Nicholas Eve, which is December 5. That night, Czech children are excited to watch for Svat&yacute; Mikul&aacute;&scaron; (as he&rsquo;s known in the local language) to show up. He normally arrives accompanied by one or more angels and one or more devils. He asks the kids if they&rsquo;ve been good all year and also asks them to sing a song or recite a poem, then gives them a basket of presents, often containing chocolate and fruit. If they&rsquo;ve been naughty, the devil might give them a lump of coal. As in the Netherlands and other European countries, St Nicholas&rsquo; Day is a separate holiday from Christmas.</span></p><p style=\"box-sizing: inherit; margin-right: 0px; margin-left: 0px; padding: 0px;\"><br></p><p style=\"box-sizing: inherit; margin-right: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-size: 20px;\">In January of 2003, after a decree of authorization by President Hosni Mubarak, Christmas was observed as a national holiday in Egypt. This marked the first time in the nation&rsquo;s modern history that a Christian holy day was formally recognized by the Egyptian government.</span></p><p style=\"box-sizing: inherit; margin-right: 0px; margin-left: 0px; padding: 0px;\"><span style=\"font-size: 20px;\">Russia was never really big on Christmas customs during the Soviet era. Nowadays, their version of Santa Claus is known as Ded Moroz (Grandfather Frost). He delivers presents to children &nbsp;a midnight on New Year&rsquo;s Eve with the help of his granddaughter, the Snow Maiden.&ndash;Bret Love</span></p></div>",
      "metafields": [
        {
          "value": "user",
          "key": "author",
          "title": "author",
          "type": "text",
          "children": null
        },
        {
          "value": "Russia was never really big on Christmas customs during the Soviet era. Nowadays, their version of Santa Claus is known as Ded Moroz (Grandfather Frost) ...",
          "key": "description",
          "title": "description",
          "type": "text",
          "children": null
        },
        {
          "value": "https://www.compostthis.co.uk/wp-content/uploads/2013/09/christmas-trees.jpg",
          "key": "blogImage",
          "title": "blogImage",
          "type": "text",
          "children": null
        }
      ],
      "bucket": "5bab3c41f69d9e4f0a0408ba",
      "type_slug": "blogs",
      "created": "2018-09-26T09:37:27.287Z",
      "created_at": "2018-09-26T09:37:27.287Z",
      "modified_at": "2018-09-26T09:47:50.311Z",
      "status": "published",
      "locale": null,
      "published_at": "2018-09-26T09:47:50.311Z",
      "modified_by": "5b97ba5f8e18cd20de9371ce",
      "publish_at": null,
      "metadata": {
        "author": "user",
        "description": "Russia was never really big on Christmas customs during the Soviet era. Nowadays, their version of Santa Claus is known as Ded Moroz (Grandfather Frost) ...",
        "blogImage": "https://www.compostthis.co.uk/wp-content/uploads/2013/09/christmas-trees.jpg"
      }
    },
    {
      "_id": "5bab5561dd33da5d40954217",
      "slug": "the-death-of-once-high-flying-vc-funds",
      "title": "The Death of Once High-flying VC Funds",
      "content": "<div>They all started with the best of intentions. Formation 8 talked about bringing “smart enterprise” to the corporate world. Social Capital talked about how to “fix capitalism” and Binary Capital wanted to “affect global behaviour change.” Rothenberg Ventures set out to “work on the biggest problems that change the world.”</div><div><br></div><div>Young founding partners debuting change-the-world funds were irresistible for chroniclers of the venture world, who too often had been forced to chat with balding and aging managing directors while hitting the links at resplendent country clubs. Everything was going to change in the venture world, and here was a new guard of progressive-thinking talent that would transform Silicon Valley forever.</div><div><br></div><div>Then it all came crashing down.</div><div><br></div><div>Social Capital&nbsp; fired nearly its entire remaining staff last week after seeing a mass staff exodus over the past few months. Formation 8 suffered deep acrimony between its founding partners, and its successive funds continue to deal with new challenges, such as a new, unreported lawsuit in California. Binary faced the Caldbeck sexual harassment situation, while Rothenberg imploded with allegations of financial fraud and mismanagement.</div><div><br></div><div>Some of the tales are sordid, while others are clearly the result of inexperience and hubris. But together, they weave a narrative for us that shouldn’t surprise anyone: giving hundreds of millions of dollars to neophytes wasn’t perhaps the best plan to build long-lasting funds.</div><div><br></div><div>The lessons though are myriad and broad. For founders, receiving investments from same-age peers may have made board meetings more relaxing, but at the cost of experience and oversight. Journalists who sat by while VCs built founding fables about themselves should have done more to pierce these reality distortion fields.</div><div><br></div><div>But perhaps most of all, the lessons need to be learned by limited partners. As LPs continue to lower their guard and drop due diligence in the race to get into the next hot fund, perhaps the combination of these stories can serve as a warning against rushing to write a check and being thoughtful about who to partner with in business.</div>",
      "metafields": [
        {
          "key": "author",
          "type": "text",
          "value": "user",
          "title": "author"
        },
        {
          "key": "description",
          "type": "text",
          "value": "Formation 8 talked about bringing “smart enterprise” to the corporate world. Social Capital talked about how to “fix capitalism” and Binary Capital wanted to “affect global behaviour change.” Rothenberg Ventures set out to “work on the biggest problems that change the world.”",
          "title": "description"
        },
        {
          "key": "blogImage",
          "type": "text",
          "value": "http://www.datainharmony.com/uploads/7/0/6/0/70603525/historical-stock-quotes-etf-mutual-fund-prices-dih_orig.png",
          "title": "blogImage"
        }
      ],
      "bucket": "5bab3c41f69d9e4f0a0408ba",
      "type_slug": "blogs",
      "created": "2018-09-26T09:46:09.405Z",
      "created_at": "2018-09-26T09:46:09.405Z",
      "modified_at": "2018-09-26T09:46:09.405Z",
      "status": "published",
      "locale": null,
      "published_at": "2018-09-26T09:46:09.405Z",
      "metadata": {
        "author": "user",
        "description": "Formation 8 talked about bringing “smart enterprise” to the corporate world. Social Capital talked about how to “fix capitalism” and Binary Capital wanted to “affect global behaviour change.” Rothenberg Ventures set out to “work on the biggest problems that change the world.”",
        "blogImage": "http://www.datainharmony.com/uploads/7/0/6/0/70603525/historical-stock-quotes-etf-mutual-fund-prices-dih_orig.png"
      }
    },
    {
      "_id": "5bb1f027b8f6137f523bbb20",
      "slug": "create-a-management-system-with-cosmic-js",
      "title": "Create a Management System with Cosmic JS",
      "content": "<div><br></div><div><span style=\"font-size: 25px;\">Intro</span></div><div><span style=\"font-size: 25px;\"><br></span></div><div>Imagine we need an app to run a parking lot with not too many requirements &mdash; parking slots should be cleaned and maintained. Spots will be rented or owned and customers will need to pay for the service. All of this data, along with customer information, will need to be stored for easy access. In this article I&rsquo;ll show you how to create this basic data management app using Cosmic JS.</div><div><br></div><div><br></div><div><span style=\"font-size: 25px;\">Preparing backend</span></div><div><span style=\"font-size: 25px;\"><br></span></div><div>First, register in Cosmic JS and create your own bucket. <span style=\"background-color: transparent; font-size: 1rem;\">After that we need to create a couple of Object Types: one for describing a parking spot, and another one for an event, happened to the spot. It might be one of three different types: payment, maintenance or cleaning.</span></div><div><br></div><div>To do it, within your bucket click &ldquo;Add Object Type&rdquo;</div><div><br></div><div>Add a list to keep a floor number and fill it with values &lsquo;Ground&rsquo;, &lsquo;First&rsquo; and &lsquo;Second&rsquo;.</div><div><br></div><div>After that create another Object Type, spot event. Add Metafield type (&lsquo;Payment&rsquo;, &lsquo;Maintenance&rsquo; and &lsquo;Cleaning&rsquo;) and event date (as date typed Metafield). Don&rsquo;t forget to add one more field with type &lsquo;Object&rsquo; to point a parent spot.</div><div><br></div><div>Now we need to add a tiny scent of security: set up write_key and read_key to restrict anonymous access to our data. <span style=\"background-color: transparent; font-size: 1rem;\">They are controlled by Settings -&gt; Basic Settings page</span></div>",
      "metafields": [
        {
          "value": "abc",
          "key": "author",
          "title": "author",
          "type": "text",
          "children": null
        },
        {
          "value": "First, register in Cosmic JS and create your own bucket. After that we need to create a couple of Object Types: one for describing a parking spot, and another one for an event, happened to the spot. It might be one of three different types: payment, maintenance or cleaning.",
          "key": "description",
          "title": "description",
          "type": "text",
          "children": null
        },
        {
          "value": "https://cosmicjs.com/images/marketing/logo.png",
          "key": "blogImage",
          "title": "blogImage",
          "type": "text",
          "children": null
        }
      ],
      "bucket": "5bab3c41f69d9e4f0a0408ba",
      "type_slug": "blogs",
      "created": "2018-10-01T10:00:07.967Z",
      "created_at": "2018-10-01T10:00:07.967Z",
      "modified_at": "2018-10-01T10:00:46.607Z",
      "status": "published",
      "locale": null,
      "published_at": "2018-10-01T10:00:46.607Z",
      "modified_by": "5b97ba5f8e18cd20de9371ce",
      "publish_at": null,
      "metadata": {
        "author": "abc",
        "description": "First, register in Cosmic JS and create your own bucket. After that we need to create a couple of Object Types: one for describing a parking spot, and another one for an event, happened to the spot. It might be one of three different types: payment, maintenance or cleaning.",
        "blogImage": "https://cosmicjs.com/images/marketing/logo.png"
      }
    },
    {
      "_id": "5c2eab90e3ea8a534ee2d07a",
      "slug": "testblog",
      "title": "Testblog",
      "content": "<b>Hi</b>",
      "metafields": [
        {
          "key": "author",
          "type": "text",
          "value": "toto",
          "title": "author"
        },
        {
          "key": "description",
          "type": "text",
          "value": "Test1234",
          "title": "description"
        },
        {
          "key": "blogImage",
          "type": "text",
          "value": "",
          "title": "blogImage"
        }
      ],
      "bucket": "5bab3c41f69d9e4f0a0408ba",
      "type_slug": "blogs",
      "created": "2019-01-04T00:40:48.655Z",
      "created_at": "2019-01-04T00:40:48.655Z",
      "modified_at": "2019-01-04T00:40:48.655Z",
      "status": "published",
      "locale": null,
      "published_at": "2019-01-04T00:40:48.655Z",
      "metadata": {
        "author": "toto",
        "description": "Test1234",
        "blogImage": ""
      }
    },
    {
      "_id": "5c363a075c72940aca870b37",
      "slug": "test-68e3d090-143a-11e9-a114-89da5fe9ad95",
      "title": "test",
      "content": "hi",
      "metafields": [
        {
          "key": "author",
          "type": "text",
          "value": "tata",
          "title": "author"
        },
        {
          "key": "description",
          "type": "text",
          "value": "testblog",
          "title": "description"
        },
        {
          "key": "blogImage",
          "type": "text",
          "value": "",
          "title": "blogImage"
        }
      ],
      "bucket": "5bab3c41f69d9e4f0a0408ba",
      "type_slug": "blogs",
      "created": "2019-01-09T18:14:31.193Z",
      "created_at": "2019-01-09T18:14:31.193Z",
      "modified_at": "2019-01-09T18:14:31.193Z",
      "status": "published",
      "locale": null,
      "published_at": "2019-01-09T18:14:31.193Z",
      "metadata": {
        "author": "tata",
        "description": "testblog",
        "blogImage": ""
      }
    },
    {
      "_id": "5c363a605c72940aca870b41",
      "slug": "testblog-9ddee500-143a-11e9-a114-89da5fe9ad95",
      "title": "testblog",
      "content": "hai this is test blog<div><br></div>",
      "metafields": [
        {
          "key": "author",
          "type": "text",
          "value": "tata",
          "title": "author"
        },
        {
          "key": "description",
          "type": "text",
          "value": "testttttttblogggg",
          "title": "description"
        },
        {
          "key": "blogImage",
          "type": "text",
          "value": "",
          "title": "blogImage"
        }
      ],
      "bucket": "5bab3c41f69d9e4f0a0408ba",
      "type_slug": "blogs",
      "created": "2019-01-09T18:16:00.080Z",
      "created_at": "2019-01-09T18:16:00.080Z",
      "modified_at": "2019-01-09T18:16:00.080Z",
      "status": "published",
      "locale": null,
      "published_at": "2019-01-09T18:16:00.080Z",
      "metadata": {
        "author": "tata",
        "description": "testttttttblogggg",
        "blogImage": ""
      }
    },
    {
      "_id": "5c4851e4f78f5339736295d8",
      "slug": "a-370a5de0-1f03-11e9-af3f-911b1ee9c0be",
      "title": "a",
      "content": "aaa",
      "metafields": [
        {
          "key": "author",
          "type": "text",
          "value": "a",
          "title": "author"
        },
        {
          "key": "description",
          "type": "text",
          "value": "a",
          "title": "description"
        },
        {
          "key": "blogImage",
          "type": "text",
          "value": "a",
          "title": "blogImage"
        }
      ],
      "bucket": "5bab3c41f69d9e4f0a0408ba",
      "type_slug": "blogs",
      "created": "2019-01-23T11:37:08.030Z",
      "created_at": "2019-01-23T11:37:08.030Z",
      "modified_at": "2019-01-23T11:37:08.030Z",
      "status": "published",
      "locale": null,
      "published_at": "2019-01-23T11:37:08.030Z",
      "metadata": {
        "author": "a",
        "description": "a",
        "blogImage": "a"
      }
    },
    {
      "_id": "5c5ecd6a54e3d226b2860692",
      "slug": "erterte",
      "title": "erterte",
      "content": "retretre",
      "metafields": [
        {
          "key": "author",
          "type": "text",
          "value": "vipin",
          "title": "author"
        },
        {
          "key": "description",
          "type": "text",
          "value": "",
          "title": "description"
        },
        {
          "key": "blogImage",
          "type": "text",
          "value": "etert",
          "title": "blogImage"
        }
      ],
      "bucket": "5bab3c41f69d9e4f0a0408ba",
      "type_slug": "blogs",
      "created": "2019-02-09T12:54:02.332Z",
      "created_at": "2019-02-09T12:54:02.332Z",
      "modified_at": "2019-02-09T12:54:02.332Z",
      "status": "published",
      "locale": null,
      "published_at": "2019-02-09T12:54:02.332Z",
      "metadata": {
        "author": "vipin",
        "description": "",
        "blogImage": "etert"
      }
    },
    {
      "_id": "5c87b10095eb133e76002b05",
      "slug": "aman",
      "title": "aman",
      "content": "hdsvchsgdv",
      "metafields": [
        {
          "key": "description",
          "type": "text",
          "value": "kumar",
          "title": "description"
        },
        {
          "key": "blogImage",
          "type": "text",
          "value": "",
          "title": "blogImage"
        }
      ],
      "bucket": "5bab3c41f69d9e4f0a0408ba",
      "type_slug": "blogs",
      "created": "2019-03-12T13:15:44.635Z",
      "created_at": "2019-03-12T13:15:44.635Z",
      "modified_at": "2019-03-12T13:15:44.635Z",
      "status": "published",
      "locale": null,
      "published_at": "2019-03-12T13:15:44.635Z",
      "metadata": {
        "description": "kumar",
        "blogImage": ""
      }
    },
    {
      "_id": "5c8f81f0ffdd18188837dde9",
      "slug": "test-987b4ba0-4971-11e9-bc09-af9e7558f2f2",
      "title": "test",
      "content": "",
      "metafields": [
        {
          "key": "author",
          "type": "text",
          "value": "test",
          "title": "author"
        },
        {
          "key": "description",
          "type": "text",
          "value": "test",
          "title": "description"
        },
        {
          "key": "blogImage",
          "type": "text",
          "value": "",
          "title": "blogImage"
        }
      ],
      "bucket": "5bab3c41f69d9e4f0a0408ba",
      "type_slug": "blogs",
      "created": "2019-03-18T11:33:04.986Z",
      "created_at": "2019-03-18T11:33:04.986Z",
      "modified_at": "2019-03-18T11:33:04.986Z",
      "status": "published",
      "locale": null,
      "published_at": "2019-03-18T11:33:04.986Z",
      "metadata": {
        "author": "test",
        "description": "test",
        "blogImage": ""
      }
    },
    {
      "_id": "5c8f81f3ffdd18188837ddea",
      "slug": "test-9a31ae30-4971-11e9-bc09-af9e7558f2f2",
      "title": "test",
      "content": "test",
      "metafields": [
        {
          "key": "author",
          "type": "text",
          "value": "test",
          "title": "author"
        },
        {
          "key": "description",
          "type": "text",
          "value": "test",
          "title": "description"
        },
        {
          "key": "blogImage",
          "type": "text",
          "value": "",
          "title": "blogImage"
        }
      ],
      "bucket": "5bab3c41f69d9e4f0a0408ba",
      "type_slug": "blogs",
      "created": "2019-03-18T11:33:07.859Z",
      "created_at": "2019-03-18T11:33:07.859Z",
      "modified_at": "2019-03-18T11:33:07.859Z",
      "status": "published",
      "locale": null,
      "published_at": "2019-03-18T11:33:07.859Z",
      "metadata": {
        "author": "test",
        "description": "test",
        "blogImage": ""
      }
    }
  ]
 if( JSON.parse(localStorage.getItem("blogs")!)==null) {
   localStorage.setItem("blogs", JSON.stringify(data));
 }
}

getBlogs(){
  return JSON.parse(localStorage.getItem("blogs")!);

}

saveBlog(data:BlogModel){
    var userName = localStorage.getItem("userExist")
  let today = new Date().toISOString()
  var id= '_' + Math.random().toString(36).substr(2, 9)
  console.log("userId"+id)
    var json=
      {
        "_id":id,title: data.title, content: data.content, slug: data.title, type_slug: 'blogs', write_key: "2223",
        metadata: {
          "author": userName,
          "description": "test",
          "blogImage": "https://image.shutterstock.com/image-photo/modern-desktop-computer-wireless-keyboard-260nw-55573504.jpg"
        },
      metafields: [
        {
          title: "Author",
          key: "author",
          type: "text",
          value: userName
        },
        {
          title: "Description",
          key: "description",
          type: "text",
          value: data.description
        },
        {
          title: "Blog Image",
          key: "blogImage",
          type: "text",
          value: data.blogImage
        },
      ],
        "bucket": "5bab3c41f69d9e4f0a0408ba",
        "created": today,
        "created_at": today,
        "modified_at": today,
        "status": "published",
        "locale": "en",

    }
let allBlogs =  JSON.parse(localStorage.getItem("blogs")!)
  console.dir("SavedBlogsBefore:"+allBlogs)
 allBlogs= allBlogs.concat(json)
  console.dir("SavedBlogsAfter:"+allBlogs)
  localStorage.setItem("blogs", JSON.stringify(allBlogs));
}
updateBlogData(data:BlogModel,id:String){
  var userName = localStorage.getItem("userExist")
  console.log("userId"+id)
  let today = new Date().toISOString()
  let allBlogs =  JSON.parse(localStorage.getItem("blogs")!)
  for (var i=0;i<allBlogs.length;i++){

    if (allBlogs[i]._id == id) {
      console.log("ID matched")
      console.log("userIdFromPara" + id)
      console.log("userIdFromData" + allBlogs[i]._id)
      if (data.title != "") {
        allBlogs[i].title = data.title
      }
      if (data.description != "") {
        allBlogs[i].metadata.description = data.description
      }
      if (data.blogImage != "") {
        allBlogs[i].metadata.blogImage = data.blogImage
      }
      allBlogs[i].created_at = today


    }
    localStorage.setItem("blogs",JSON.stringify(allBlogs))


  }

}
getPost(id:string){
  var jsonData =  JSON.parse(localStorage.getItem("blogs")!)
  this.allBlogs  = jsonData;
  console.log("isAllBlog:"+this.allBlogs._id);
  if(this.allBlogs) {

    this.blogById = this.allBlogs.filter(blogs => {

      return blogs._id === id
    })
  }else{
    console.log("PostByid"+"No blogs exist");
  }

  return this.blogById
}

}
