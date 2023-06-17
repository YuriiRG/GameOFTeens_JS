const projects = [
  {
    id: 0,
    name: 'CleverGrowth',
    description:
      'CleverGrowth - це платформа персональних фінансів на основі штучного інтелекту, яка допомагає користувачам оптимізувати свої витратні звички, відстежувати витрати та знаходити розумні інвестиційні можливості, що в кінцевому підсумку дає можливість людям досягти фінансової свободи.'
  },
  {
    id: 1,
    name: 'EcoFood',
    description:
      'EcoFood - це стартап зі екологічного сільського господарства, який використовує методи вертикального землеробства та інноваційні системи зрошення для вирощування органічних культур без пестицидів цілий рік, зменшуючи споживання води та сприяючи місцевому виробництву продуктів питания.'
  },
  {
    id: 2,
    name: 'HealthSync',
    description:
      "HealthSync - це стартап у сфері медичних технологій, спрямований на покращення догляду за пацієнтами та комунікації. Їхній додаток безперешкодно зв'язує пацієнтів, лікарів та доглядальників, дозволяючи здійснювати моніторинг стану здоров'я в режимі реального часу, призначати зустрічі та складати персоналізовані плани лікування."
  },
  {
    id: 3,
    name: 'SkillSpark',
    description:
      "SkillSpark - це платформа для онлайн-навчання, яка об'єднує досвідчених професіоналів зі студентами, що шукають спеціалізовані навички та знання. Завдяки відео-сесіям у прямому ефірі та інтерактивним курсам, SkillSpark дає змогу людям здобувати знання в різних галузях."
  },
  {
    id: 4,
    name: 'GreenPod',
    description:
      'GreenPod проектує та виготовляє екологічно чисті, енергоефективні будинки, використовуючи модульні методи будівництва. Їхні оселі використовують стійкі матеріали, технології "розумного дому" та відновлювані джерела енергії, пропонуючи більш екологічну та доступну альтернативу житлу.'
  },
  {
    id: 5,
    name: 'SolaCharge',
    description:
      'SolaCharge розробляє сонячні зарядні станції для електромобілів, які можна легко встановити на парковках, у громадських місцях та на автомагістралях. Їх інноваційна інфраструктура має на меті прискорити впровадження електромобілів та зменшити викиди вуглекислого газу.'
  }
].map((project) =>
  Object.assign(project, {
    smallImage: 'https://dummyimage.com/600x600/000/fff',
    bigImage: 'https://dummyimage.com/2000x1000/000/fff',
    longDescription: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac condimentum elit. Nunc libero leo, bibendum non iaculis at, auctor ac velit. Vestibulum luctus tincidunt leo sed pulvinar. Sed eget elementum neque. Curabitur ac bibendum augue, in euismod enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed gravida elit vitae rutrum hendrerit. Phasellus pretium ut diam nec lobortis. Nunc a risus sit amet lorem mollis dapibus. Quisque bibendum euismod commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

    Etiam eget velit sed urna mollis fringilla. Nunc feugiat tortor nec elit bibendum, ac hendrerit lectus consectetur. Nulla laoreet egestas pellentesque. Nunc tincidunt leo ac justo volutpat finibus. Pellentesque fermentum pellentesque enim et rutrum. Sed at purus nulla. Phasellus semper est eu varius rhoncus. Ut odio felis, rutrum eget libero nec, ornare fringilla elit. In scelerisque tempus ex ac consectetur. Nam porttitor euismod consectetur. Ut in diam non enim pretium hendrerit nec bibendum nibh. Donec convallis orci sollicitudin, elementum augue vel, bibendum mauris. Sed dapibus, sapien sit amet tincidunt ultrices, massa tortor tristique justo, sed sollicitudin dolor ipsum ullamcorper dolor. Integer ultricies luctus nunc, vitae iaculis mauris dapibus eu. Donec malesuada dui vitae lacus rutrum luctus.

    Aenean ac dolor in orci maximus bibendum. Pellentesque at diam a lacus rhoncus maximus ac et enim. Duis laoreet commodo nibh ac posuere. Phasellus ac dignissim metus. Phasellus sollicitudin enim non ipsum tristique, sit amet gravida massa rhoncus. Etiam at vehicula ligula. Aliquam et purus quis tortor aliquam rhoncus eget non lorem. Etiam tempor vel turpis nec luctus.

    Ut a hendrerit purus. Morbi nec ex metus. Nunc mollis dolor in metus lobortis tempor. Pellentesque dapibus dui ac maximus imperdiet. Nullam a leo aliquam, placerat lectus at, accumsan mauris. Sed ante neque, faucibus id cursus quis, cursus id mauris. Duis ullamcorper tempus diam sed vulputate. Suspendisse auctor condimentum arcu nec elementum. Morbi a pulvinar velit, ut condimentum elit. Suspendisse risus purus, fermentum sed pulvinar in, scelerisque ac dolor. Vivamus sollicitudin ante ac vulputate suscipit. In dignissim lectus sodales tellus consectetur consequat. Ut dignissim laoreet tellus, ut luctus enim feugiat eleifend. Aenean eros ipsum, sagittis eget lorem ac, vulputate laoreet massa. Vivamus augue tellus, convallis at ex vel, dignissim laoreet elit. Sed quam urna, maximus at eleifend vel, tempor et justo.

    Pellentesque sollicitudin, justo quis auctor mollis, elit nulla volutpat ante, vitae iaculis est orci nec velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel facilisis augue. Proin fringilla efficitur mi quis fringilla. Etiam tristique lorem et libero rhoncus, ut imperdiet lacus hendrerit. Mauris ac sem dolor. Aliquam euismod quis nibh id posuere. Quisque elementum ante et libero laoreet, in ultricies nisi porta. Cras congue vehicula venenatis. `
  })
);
export function getProjects() {
  return projects;
}

export function getProject(id: number) {
  return projects[id];
}
