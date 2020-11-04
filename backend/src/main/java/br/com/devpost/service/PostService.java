package br.com.devpost.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.devpost.model.Post;
import br.com.devpost.repository.PostRepository;

@Service
public class PostService {
	
	@Autowired
	private PostRepository postRepository;
	
	public Post salvar(Post post) {
		post.setData(LocalDate.now());
		return postRepository.save(post);
	}
	
	public List<Post> listarPosts(){
		
		return postRepository.findAll();
	}
	
	public void excluir(Long postId) {
		postRepository.deleteById(postId);
	}
	
	
}
