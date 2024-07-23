package com.team3.fitnutri.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.team3.fitnutri.models.Recipe;
import com.team3.fitnutri.services.RecipeService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.context.WebApplicationContext;

import java.util.List;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/*
* TO TEST THIS IN A MOCK CONTEXT, ADD THE FOLLOWING ANNOTATIONS INSTEAD OF @SpringBootTest AND @AutoConfigureMockMvc:
* @WebMvcTest(RecipeController.class)
* @Import(SecurityConfig.class)
* */

@SpringBootTest
@AutoConfigureMockMvc
public class RecipeControllerIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private RecipeService recipeService;

    @Autowired
    private WebApplicationContext context;

    @Test
    @WithMockUser(username = "user")
    public void testCreateRecipe() throws Exception {
        Recipe newRecipe = new Recipe();
        newRecipe.setName("Test Recipe");
        newRecipe.setNutrientGoal("Weight Loss");
        newRecipe.setServingSize(2);
        newRecipe.setCaloriesCount(250.0);
        newRecipe.setIngredients(List.of("Ingredient 1", "Ingredient 2"));
        newRecipe.setMacroNutrients(List.of("Protein: 20g", "Carbs: 30g"));
        newRecipe.setMicroNutrients(List.of("Vitamin C: 15mg"));
        newRecipe.setRecommendedMealType("Dinner");
        newRecipe.setSpecialDietAttributes(List.of("Vegan", "Gluten-Free"));
        newRecipe.setRecipeInstructions(List.of("Step 1", "Step 2"));

        mockMvc.perform(post("/recipe/createRecipe")
                        .with(csrf())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(newRecipe)))
                .andExpect(status().isOk());
    }
}