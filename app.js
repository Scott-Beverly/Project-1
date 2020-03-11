console.log('Welcome to my console log! ', $)

let url = 'https://docs.google.com/spreadsheets/d/1ABSg_gTOZEj4URDdodS6Mwx5crZhCtaIdlKaHnuZ57A/edit#gid=0'
let id = '1ABSg_gTOZEj4URDdodS6Mwx5crZhCtaIdlKaHnuZ57A'
let source = `https://spreadsheets.google.com/feeds/list/1ABSg_gTOZEj4URDdodS6Mwx5crZhCtaIdlKaHnuZ57A/od6/public/values?alt=json`

fetch(source)
  .then( response => response.json() )
  .then( data =>  {
      console.log('data', data)
    
      let projects = data.feed.entry.map( project => {
        
        return {
          title: project.gsx$title.$t,
          image: project.gsx$image.$t,
          description: project.gsx$description.$t,
          url: project.gsx$url.$t
        }
      })
      app(projects)
  }) 
  .catch( err => console.log('err', err))

function app(projects) {
  console.log('app - projects', projects)

// App goes here


function projectData(){
    for(let i =0; i < projects.length; i++){
        let $article = $(`
        <article>
           <a class="project-titles" href="#">${projects[i].title}</a>
        <div class="project-image">
        <a href=${projects[i].url}>
             <img width= "100%" height="100%" src=${projects[i].image} alt="startup matchmaker"></a>
        </div>
        <div class= buttons>
        <button href = "#"> Code </button>
        <button href = "#"> Repo </button>
        </div>
        </article>`)

        $('.contentContainer').append($article)
    }
  }
  projectData()
 }


  


























