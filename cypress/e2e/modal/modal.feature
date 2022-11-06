Feature: openModal.feature

   Scenario: o usuario pode abrir uma modal
      Given ao acessar a página de tutorial de modal box
      When o usuário clicar no botão open-modal
      Then deve ser exibido uma janela Open Modal

Feature: closeModal.feature

   Scenario: o usuario pode fechar a janela Open-modal através do botão X
      Given ao acessar a página de tutorial de modal box
      And o usuário clicar no botão open-modal
      When o botão x indicado no canto superior direito da janela open-modal for clicado
      Then o elemento open-modal será fechado

Feature: closeModalOut.feature

   Scenario: o usuario pode fechar a janela Open-modal clicando fora da área Open-modal
      Given ao acessar a página de tutorial de modal box
      And o usuário clicar no botão open-modal
      When o usuário clicar fora do elemento open-modal
      Then o elemento open-modal será fechado
