Feature: validaCores.feature

   Scenario: validar tabela de cores
      Given eu acesso a página de tabela de cores
      When eu encontro a cor "<Cor>"
      Then o hexadecial deve ser igual a "<Hexa>"

      Examples:
         | Cor        | Hexa    |
         | Black      | #000000 |
         | Maroon     | #800000 |
         | Gold       | #FFD700 |
         | Cyan       | #00FFFF |
         | Blue       | #0000FF |
         | Silver     | #C0C0C0 |
         | BlueViolet | #8A2BE2 |
