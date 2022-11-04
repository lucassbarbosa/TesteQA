Feature: validaCores.feature

Scenario: validar tabela de cores
   Given ao acessar a página de tabela de cores
    When a cor Black for encontrada
    Then o hexadecial deve ser igual a #000000
