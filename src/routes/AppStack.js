import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DetalhesUsuario from "../screens/DetalhesUsuario";
import AppTabs from "./AppTabs";

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={AppTabs}
        name="Principal"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={DetalhesUsuario}
        name="Detalhes"
        options={{
          headerBackTitle: "Início",
          headerStyle: { backgroundColor: "#14325A" },
          headerTintColor: "#FFFFFF",
          title: "Perfil do Usuário",
        }}
      />
    </Stack.Navigator>
  );
}
