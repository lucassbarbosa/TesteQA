Feature: abertura_botao_modal

Scenario: o_usuario_pode_abrir_uma_modal
   Given usuario_acessa_tutorial_de_modal_box
    When usuario_clica_no_botao_open_modal
    Then deve_ser_exibido_uma_janela