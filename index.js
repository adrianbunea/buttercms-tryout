const butter = Butter('c1a8ea11337c93761d839e4a857e0e5388662eda');

async function ready() {
    const params = {
        'page': '1',
        'page_size': '10'
    };
    butter.content.retrieve(['job'], params)
        .then(function(resp) {
            const jobs = resp.data.data.job;
            jobs.forEach(appendJob);
        })
        .catch(function(errors) {
            console.log(errors);
            return [];
        });
}

document.addEventListener("DOMContentLoaded", ready);

function appendJob(job) {
    const jobsElement = document.getElementById('jobs');
    const item = document.createElement('li');

    const titleParagraph = document.createElement('p');
    const title = document.createTextNode(job.title);
    titleParagraph.appendChild(title);

    const descriptionParagraph = document.createElement('p');
    const description = document.createTextNode(job.description);
    descriptionParagraph.appendChild(description);

    const levelOfExperienceParagraph = document.createElement('p');
    const levelOfExperience = document.createTextNode(job.level_of_experience);
    levelOfExperienceParagraph.appendChild(levelOfExperience);

    const minimumExperienceParagraph = document.createElement('p');
    const minimumExperience = document.createTextNode(job.minimum_years_of_experience);
    minimumExperienceParagraph.appendChild(minimumExperience);

    const maximumExperienceParagraph = document.createElement('p');
    const maximumExperience = document.createTextNode(job.maximum_years_of_experience);
    maximumExperienceParagraph.appendChild(maximumExperience);

    const responsibilitiesList = document.createElement('ol');
    job.responsibilities.split(',').forEach(responsibility => {
       const responsibilityItem = document.createElement('li');
       const responsibilityText = document.createTextNode(responsibility);
        responsibilityItem.appendChild(responsibilityText);
       responsibilitiesList.appendChild(responsibilityItem);
    });

    item.appendChild(titleParagraph);
    item.appendChild(descriptionParagraph);
    item.appendChild(levelOfExperienceParagraph);
    item.appendChild(minimumExperienceParagraph);
    item.appendChild(maximumExperienceParagraph);
    item.appendChild(responsibilitiesList);
    jobsElement.appendChild(item);
}
