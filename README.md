git config --global user.name evysassanon
git config --global user.name borgesevelyn3280@gmail.com

-- Criando um projeto, especificando nome e templete vazio
npx create-expo-app@latest SassanonsShoppingList --template blank

cd SassanonsShoppingList 

-- Executar porjeto 
npx expo start --tunnel

npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar