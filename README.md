# Kickstarter Data Parser

An API to parse huge JSON files (~ 1 GB) comprising monthly data about Kickstarter projects into their succinct versions by extracting certain fields from each data entry.

Optimization gained: approx. __82%__ reduction in file size.

Data src: https://webrobots.io/kickstarter-datasets/

Download data set from here and replace the source file in `index.js` file.


<br /><br />


#### Setting up
Navigate to the root directory of this project.
```bash
npm install
```


<br /><br />


#### Running the API
Navigate to the root directory of this project.
```bash
clear && node .
```


<br /><br />


#### Schema

After parsing:
```json
{
  "id": 2016865793,
  "name": "Support the Strange and Unusual, from fantasy to conspiracy",
  "slug": "represent-the-strange-and-unusual",
  "blurb": "Monsters, Fantasy, Illusion, Delusion, and a hint of reality. Check out an excellent way I found to express my digital paintings!",
  "goal": 5400,
  "pledged": 20,
  "state": "failed",
  "curr": "USD",
  "current_curr": "USD",
  "created_at": 1332493397,
  "launched_at": 1332818772,
  "deadline": 1336447572,
  "spotlight": false,
  "staff_pick": false,
  "is_starrable": false,
  "backers_count": 1,
  "profile_status": "inactive",
  "category": "Digital Art",
  "photo": "https://ksr-ugc.imgix.net/assets/011/334/766/688a66a9c45430959d71cfb5745b1b02_original.jpg?crop=faces&w=560&h=315&fit=crop&v=1463681174&auto=format&q=92&s=a5d82b5c28fdde31e68d3da5de335937",
  "location": {
    "name": "Denver",
    "state": "CO",
    "country": "US"
  },
  "creator": {
    "id": 987604337,
    "name": "arthur",
    "avatar": "https://ksr-ugc.imgix.net/assets/006/403/543/06c0ee812f63c179eae7e5d09750ab28_original.jpg?w=160&h=160&fit=crop&v=1461386823&auto=format&q=92&s=7a454441c251e4bd97473bc72e8653b7"
  }
}
```

Before parsing:
```json
{
  "id": 458123319,
  "robot_id": "Kickstarter",
  "run_id": "Kickstarter_2018-01-12T10_20_09_196Z",
  "created_at": "2018-01-12T22:14:58.779706",
  "table_id": "Kickstarter",
  "data": {
    "id": 2016865793,
    "goal": 5400,
    "name": "Support the Strange and Unusual, from fantasy to conspiracy",
    "slug": "represent-the-strange-and-unusual",
    "urls": {
    "web": {
      "project": "https://www.kickstarter.com/projects/987604337/represent-the-strange-and-unusual?ref=category_newest",
      "rewards": "https://www.kickstarter.com/projects/987604337/represent-the-strange-and-unusual/rewards"
    }
    },
    "blurb": "Monsters, Fantasy, Illusion, Delusion, and a hint of reality. Check out an excellent way I found to express my digital paintings!",
    "photo": {
    "ed": "https://ksr-ugc.imgix.net/assets/011/334/766/688a66a9c45430959d71cfb5745b1b02_original.jpg?crop=faces&w=352&h=198&fit=crop&v=1463681174&auto=format&q=92&s=0c6e5fee5796b38a9f9f3fe9817a94d5",
    "key": "assets/011/334/766/688a66a9c45430959d71cfb5745b1b02_original.jpg",
    "med": "https://ksr-ugc.imgix.net/assets/011/334/766/688a66a9c45430959d71cfb5745b1b02_original.jpg?crop=faces&w=272&h=153&fit=crop&v=1463681174&auto=format&q=92&s=1daf324a29e0eb03fb74d51af0f5baa7",
    "full": "https://ksr-ugc.imgix.net/assets/011/334/766/688a66a9c45430959d71cfb5745b1b02_original.jpg?crop=faces&w=560&h=315&fit=crop&v=1463681174&auto=format&q=92&s=a5d82b5c28fdde31e68d3da5de335937",
    "small": "https://ksr-ugc.imgix.net/assets/011/334/766/688a66a9c45430959d71cfb5745b1b02_original.jpg?crop=faces&w=160&h=90&fit=crop&v=1463681174&auto=format&q=92&s=42c87f1010b6a4df6ad5a0ca6c67e2a0",
    "thumb": "https://ksr-ugc.imgix.net/assets/011/334/766/688a66a9c45430959d71cfb5745b1b02_original.jpg?crop=faces&w=48&h=27&fit=crop&v=1463681174&auto=format&q=92&s=ca0438ce853ae7f9030a43fe50843b0a",
    "little": "https://ksr-ugc.imgix.net/assets/011/334/766/688a66a9c45430959d71cfb5745b1b02_original.jpg?crop=faces&w=208&h=117&fit=crop&v=1463681174&auto=format&q=92&s=1d6acc1ecdccd2ccc89de6e0a04fe66d",
    "1024x576": "https://ksr-ugc.imgix.net/assets/011/334/766/688a66a9c45430959d71cfb5745b1b02_original.jpg?crop=faces&w=1024&h=576&fit=crop&v=1463681174&auto=format&q=92&s=57ca6f1f07ad1e6c63694fcd4a4ef77f",
    "1536x864": "https://ksr-ugc.imgix.net/assets/011/334/766/688a66a9c45430959d71cfb5745b1b02_original.jpg?crop=faces&w=1552&h=873&fit=crop&v=1463681174&auto=format&q=92&s=cff25cf5f8f4bf53b36ab1901cfa67b9"
    },
    "state": "failed",
    "country": "US",
    "creator": {
    "id": 987604337,
    "name": "arthur",
    "urls": {
      "api": {
      "user": "https://api.kickstarter.com/v1/users/987604337?signature=1515881698.154265aef70c333aa3759d35482d365162fa231d"
      },
      "web": {
      "user": "https://www.kickstarter.com/profile/987604337"
      }
    },
    "avatar": {
      "small": "https://ksr-ugc.imgix.net/assets/006/403/543/06c0ee812f63c179eae7e5d09750ab28_original.jpg?w=160&h=160&fit=crop&v=1461386823&auto=format&q=92&s=7a454441c251e4bd97473bc72e8653b7",
      "thumb": "https://ksr-ugc.imgix.net/assets/006/403/543/06c0ee812f63c179eae7e5d09750ab28_original.jpg?w=40&h=40&fit=crop&v=1461386823&auto=format&q=92&s=8a0c4a1b030eac4bc8f617ef91109ab7",
      "medium": "https://ksr-ugc.imgix.net/assets/006/403/543/06c0ee812f63c179eae7e5d09750ab28_original.jpg?w=160&h=160&fit=crop&v=1461386823&auto=format&q=92&s=7a454441c251e4bd97473bc72e8653b7"
    },
    "is_registered": true,
    "chosen_currency": null
    },
    "fx_rate": 1,
    "pledged": 20,
    "profile": {
    "id": 114885,
    "name": null,
    "blurb": null,
    "state": "inactive",
    "link_url": null,
    "link_text": null,
    "project_id": 114885,
    "text_color": null,
    "link_text_color": null,
    "background_color": null,
    "state_changed_at": 1425915806,
    "show_feature_image": false,
    "link_background_color": null,
    "background_image_opacity": 0.8,
    "feature_image_attributes": {
      "image_urls": {
      "default": "https://ksr-ugc.imgix.net/assets/011/334/766/688a66a9c45430959d71cfb5745b1b02_original.jpg?crop=faces&w=1552&h=873&fit=crop&v=1463681174&auto=format&q=92&s=cff25cf5f8f4bf53b36ab1901cfa67b9",
      "baseball_card": "https://ksr-ugc.imgix.net/assets/011/334/766/688a66a9c45430959d71cfb5745b1b02_original.jpg?crop=faces&w=560&h=315&fit=crop&v=1463681174&auto=format&q=92&s=a5d82b5c28fdde31e68d3da5de335937"
      }
    },
    "should_show_feature_image_section": true
    },
    "category": {
    "id": 21,
    "name": "Digital Art",
    "slug": "art/digital art",
    "urls": {
      "web": {
      "discover": "http://www.kickstarter.com/discover/categories/art/digital%20art"
      }
    },
    "color": 16760235,
    "position": 3,
    "parent_id": 1
    },
    "currency": "USD",
    "deadline": 1336447572,
    "location": {
    "id": 2391279,
    "name": "Denver",
    "slug": "denver-co",
    "type": "Town",
    "urls": {
      "api": {
      "nearby_projects": "https://api.kickstarter.com/v1/discover?signature=1515876020.8859bb50a8efc8a15c02d3e0985cb339c6e84705&woe_id=2391279"
      },
      "web": {
      "discover": "https://www.kickstarter.com/discover/places/denver-co",
      "location": "https://www.kickstarter.com/locations/denver-co"
      }
    },
    "state": "CO",
    "country": "US",
    "is_root": false,
    "short_name": "Denver, CO",
    "localized_name": "Denver",
    "displayable_name": "Denver, CO"
    },
    "usd_type": "domestic",
    "spotlight": false,
    "created_at": 1332493397,
    "source_url": "https://www.kickstarter.com/discover/categories/art/digital%20art",
    "staff_pick": false,
    "launched_at": 1332818772,
    "usd_pledged": "20.0",
    "is_starrable": false,
    "backers_count": 1,
    "currency_symbol": "$",
    "static_usd_rate": 1,
    "current_currency": "USD",
    "state_changed_at": 1336447572,
    "disable_communication": false,
    "currency_trailing_code": true,
    "converted_pledged_amount": 20
  }
}
```


<br /><br />


#### Author

[Navdeep Singh Bagga](http://www.navdeepsb.com "navdeepsb.com")
