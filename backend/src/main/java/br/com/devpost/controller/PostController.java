package br.com.devpost.controller;


import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.devpost.model.Post;
import br.com.devpost.repository.PostRepository;
import br.com.devpost.service.PostService;

@RestController
@RequestMapping("/posts")
public class PostController {
	
	@Autowired
	private PostRepository postRepositoy;
	
	@Autowired
	private PostService service;
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Post adicionarPost(@RequestBody @Valid Post post) {
		return service.salvar(post);
	}
	
	@GetMapping("/{postId}")
	public ResponseEntity<Post> getPostDetalhes(@PathVariable @Valid Long postId) {
		Optional<Post> post = postRepositoy.findById(postId);
		if(post.isPresent()) {
			return ResponseEntity.ok(post.get());
		}
		return ResponseEntity.notFound().build();	
	}

	
	@GetMapping
	public Page<Post> listar(
			@RequestParam(value = "page", defaultValue = "0") Integer pagina,
			@RequestParam(value = "size", defaultValue = "10") Integer tamanhoPagina
	){
		PageRequest pageRequest = PageRequest.of(pagina, tamanhoPagina);
		return postRepositoy.findAll(pageRequest);
	}
	
	@PutMapping("/{postId}")
	public ResponseEntity<Post> atualizar(@PathVariable Long postId,
			@RequestBody Post post){
		
		if(!postRepositoy.existsById(postId)) {
			return ResponseEntity.notFound().build();
		}
		post.setId(postId);
		post = service.salvar(post);
		 return ResponseEntity.ok(post);
		
	}
	
	@DeleteMapping("/{postId}")
	public ResponseEntity<Void> remover(@PathVariable Long postId){
		
		if(!postRepositoy.existsById(postId)) {
			return ResponseEntity.notFound().build();
		}
		service.excluir(postId);
		return ResponseEntity.noContent().build();
	}

}
